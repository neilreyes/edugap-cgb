( function( wp ) {
	//alert( 'loaded' );
	const registerPlugin = wp.plugins.registerPlugin;
	const PluginSidebar = wp.editPost.PluginSidebar;
	const el = wp.element.createElement;
	const Component = function() {
		return el(
			PluginSidebar,
			{
				name: 'edugap-plugin-sidebar',
				title: 'Edugap plugin sidebar',
			},
			'Content of the page'
		);
	};
	registerPlugin(
		'my-test-plugin',
		{ render: Component  }
	);
}( window.wp ) );
