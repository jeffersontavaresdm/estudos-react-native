import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'count': {
      return {...state, valor: state.valor + 1};
    }
    case 'activate': {
      return {...state, ativado: !state.ativado};
    }
    case 'estado': {
      if (state.ativado) {
        return {...state, estado: 'Ativado'};
      } else {
        return {...state, estado: 'Desativado'};
      }
    }
    default:
      return state;
  }
}

const useCustomHook = valorInicial => {
  const [state, dispatch] = React.useReducer(
    (state, action) => reducer(state, action),
    {
      valor: valorInicial,
      ativado: false,
      estado: 'Inativo',
    },
    undefined,
  );

  React.useEffect(() => {
    dispatch({type: 'estado'});
  }, [state.ativado]);

  return {
    state,
    dispatch,
  };
};

export default useCustomHook;
