import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { MoneyArticle } from '../MoneyArticle';
import { GetupArticle } from '../GetupArticle';
 
function ArticlePage(){
  return(
    <Fragment>
      <div className="topNav">
        <ul>
          <li><Link to="/article/money-article">Money</Link></li>
          <li><Link to="/article/getup-article">Getup</Link></li>
        </ul>
      </div>

      <div className="content">
        <h4>Article List</h4>
        <Route path="/article/money-article" component={ MoneyArticle }/>
        <Route path="/article/getup-article" component={ GetupArticle }/>
      </div>
    </Fragment>
  )
}

export { ArticlePage }