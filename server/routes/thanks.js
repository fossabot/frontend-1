const action = ( context ) => {
  console.log( context.session );
  return {
    page: 'thanks',
    api: {
      order: context.session.__order,
    }
  };
};

module.exports = action;
