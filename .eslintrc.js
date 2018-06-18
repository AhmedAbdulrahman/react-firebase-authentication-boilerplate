module.exports = {
	"extends": "fyndiq",
	rules: {
		// FIXME: shouldn't be disabled
		'react/prop-types': 0,
	
		// Accessibility methods are not crucial
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-autofocus': 0,
		'jsx-a11y/accessible-emoji': 0,
	  }
};