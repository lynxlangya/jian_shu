import React from 'react'
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const Detail = Loadable({
  loader: () => import('./index'),
  loading() {
    return <h1>正在加载...</h1>
  },
})

export default () => <Detail />
