import React, { useState } from 'react';
import LineCharts from './LineCharts';
import ModalBox from './ModalBox';


const Content = ({ values, setValues }) => {
  const [modal, setModal] = useState(false);

  const updateValues = (rank, percentile, answer) => {
    setValues({ rank, percentile, answer });
  };

  return (
    <div className='content'>
      <span>Skill Test</span>
      <div className="html">
        <div className="html-content">
          <img src="https://s3-alpha-sig.figma.com/img/8db9/c6bc/56c97f45cd6ef095fbd9688e5d630ba0?Expires=1699228800&Signature=cFCNJ1K0EbINr9cc9hEnUVvNgpGC3qJ~fL6JrQM-TV9IE01h1sOEhp6FEO7mH~eJOGo2IuItxLYgNFJ6jGP5NZOAvdYxeuYTZGKtwdGOK8Hqj3XmYWzHfJ7wxt~3f9INY1nZkVD~wekIH49wM53hhOuvkvwg7baOxA32Z4gRMLhhPFxS8gaxR-Vho3cjBnmf5vT~2vpj2RvKqQujaQjhwsmlhzdCN9UWYDXqIXHuYAoQlGQ~rSxEsmuelCNiALwDhPKZTgVJJejSW3Od7zjNfUEMCWU6ULvEMZAF0ehHKb4TagEfUNsTfqhQbmIcw2G10ooRjH9NLplnS0Fqr2Yu7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" width={35} />
          <div className="html-content_inside">
            <h4 className='h4_html'>Hypertext Markup Language</h4>
            <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
          </div>
        </div>
        <button className='update_btn' onClick={() => setModal(true)}>Update</button>
      </div>
      <div className="quick_stat">
        <h4>Quick Statistics</h4>
        <div className="stat_details">
          <div className="rank">
            <span className='circle'>🏆</span>
            <div className="rank_no">
              <span>{values.rank}</span>
              <span>YOUR RANK</span>
            </div>
          </div>
          <div className="percentile">
            <span className='circle'>📋</span>
            <div className="percentile_">
              <span>{values.percentile}%</span>
              <span>PERCENTILE</span>
            </div>
          </div>
          <div className="answer">
            <span className='circle'>✅</span>
            <div className="answer_no">
              <span>{values.answer}/15</span>
                          <span>CORRECT ANSWERS</span>
                          
            </div>
          </div>
        </div>
      </div>
      <div className='compare_graph'>
        <div className='graph_heading'>
          <h4>Comparison Graph</h4>
          <p className='graph_content'>
            {`You scored ${values.percentile}% percentile which is ${values.percentile > 72 ? 'higher' : 'lower'} than the average percentile 72% of all the engineers who took this assessment`}
          </p>
        </div>
        <div>
          <LineCharts percentile={values.percentile} average={72} />
        </div>
      </div>
      <ModalBox modal={modal} values={updateValues} setModal={setModal} />
    </div>
  );
};

export default Content;
