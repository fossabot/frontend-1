const action = ( context ) => {
  return {
    page: 'thanks',
    api: {
      order: context.session.__order,
    }
  };
};

module.exports = action;
