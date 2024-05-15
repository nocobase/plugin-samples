import { UseRequestResult, useAppSpin, useRequest } from '@nocobase/client';
import React, { createContext, useContext, useEffect, useRef } from 'react';

const CustomContext = createContext<UseRequestResult<any>>(null);

function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}

// TODO: 这类场景很多，待优化，暂时这里都是在插件里定义 Context 和相关 hook 的
export const CustomContextProvider: React.FC = (props) => {
  const { render } = useAppSpin();
  const isFirstRender = useFirstRender();
  const result = useRequest({
    url: 'sampleTables1:get',
  });
  // 第一次才 Loading
  if (isFirstRender && result.loading) {
    return render();
  }
  return <CustomContext.Provider value={result}>{props.children}</CustomContext.Provider>;
};

export const useCustomContext = () => {
  return useContext(CustomContext);
};
