import React, { Fragment } from 'react'
import Header from './Header';
import SearchWidget from '@/component/Common/SearchWidget';

export default function index({children}) {
  return (
    <Fragment>
        <Header/>
        <SearchWidget />
        {children}
    </Fragment>
  )
}
