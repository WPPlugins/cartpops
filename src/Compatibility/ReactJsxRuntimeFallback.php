<?php
/**
 * Provides the `react-jsx-runtime` script handle on WordPress 6.5.
 *
 * @package CartPops
 */

declare( strict_types=1 );

namespace CartPops\Compatibility;

/**
 * Provides the `react-jsx-runtime` script handle on WordPress 6.5.
 *
 * The wp-scripts build makes the CartPops admin and block editor bundles depend
 * on `react-jsx-runtime`, which WordPress registers only from 6.6. WordPress
 * silently drops a script whose dependency is missing, so on 6.5 the settings
 * page stays blank and the CartPops blocks never reach the editor. This
 * registers a small stand-in built on the `react` handle WordPress already
 * ships. WordPress 6.6 and later keep their own runtime.
 */
final class ReactJsxRuntimeFallback {
	public const HANDLE = 'react-jsx-runtime';

	/**
	 * `window.ReactJSXRuntime` on top of `React.createElement`.
	 *
	 * `jsxs` receives static children as an array; spreading them keeps React
	 * from asking for keys on children that are not a list.
	 */
	private const SCRIPT = '(function(R){'
		. 'if(!R||window.ReactJSXRuntime){return;}'
		. 'function make(isStatic){return function(type,props,key){'
		. 'var config={},name,children;props=props||{};'
		. 'for(name in props){if(name!=="children"&&Object.prototype.hasOwnProperty.call(props,name)){config[name]=props[name];}}'
		. 'if(key!==undefined){config.key=key;}'
		. 'if(!Object.prototype.hasOwnProperty.call(props,"children")){return R.createElement(type,config);}'
		. 'children=props.children;'
		. 'return isStatic&&Array.isArray(children)?R.createElement.apply(R,[type,config].concat(children)):R.createElement(type,config,children);'
		. '};}'
		. 'window.ReactJSXRuntime={jsx:make(false),jsxs:make(true),Fragment:R.Fragment};'
		. '})(window.React);';

	/** Register the stand-in when WordPress has React but no JSX runtime. */
	public static function register(): void {
		if ( wp_script_is( self::HANDLE, 'registered' ) || ! wp_script_is( 'react', 'registered' ) ) {
			return;
		}

		wp_register_script( self::HANDLE, false, array( 'react' ), CARTPOPS_VERSION, false );
		wp_add_inline_script( self::HANDLE, self::SCRIPT );
	}
}
