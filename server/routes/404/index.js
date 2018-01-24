const action = ( context ) => {
	return {
		page: 'error',
    reason: context.reason
	}
};

module.exports = action;
