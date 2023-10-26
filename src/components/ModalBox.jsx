import { useState } from "react";



const ModalBox=({ modal,setModal,values})=> {
    
    const [rank, setRank] = useState();
    const [percentile, setPercentile] = useState();
    const [answers, setAnswers] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        values(rank,percentile,answers)
        setModal(false)
        setRank()
        setPercentile()
        setAnswers()
}

  return (
      modal && (
          
     
      <div className="modal">
        <div className="content">
          <div className="headermodal">
            <h2>Update Scores</h2>
            <img src="https://s3-alpha-sig.figma.com/img/8db9/c6bc/56c97f45cd6ef095fbd9688e5d630ba0?Expires=1699228800&Signature=cFCNJ1K0EbINr9cc9hEnUVvNgpGC3qJ~fL6JrQM-TV9IE01h1sOEhp6FEO7mH~eJOGo2IuItxLYgNFJ6jGP5NZOAvdYxeuYTZGKtwdGOK8Hqj3XmYWzHfJ7wxt~3f9INY1nZkVD~wekIH49wM53hhOuvkvwg7baOxA32Z4gRMLhhPFxS8gaxR-Vho3cjBnmf5vT~2vpj2RvKqQujaQjhwsmlhzdCN9UWYDXqIXHuYAoQlGQ~rSxEsmuelCNiALwDhPKZTgVJJejSW3Od7zjNfUEMCWU6ULvEMZAF0ehHKb4TagEfUNsTfqhQbmIcw2G10ooRjH9NLplnS0Fqr2Yu7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="skill" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="body_modal">
              <div className="modal_section">
                <label>
                  <span className="count">1</span>
                  Update your <b>rank</b>
                </label>
                <input type="number" value={rank} onChange={(e)=>setRank(e.target.value)}  required />
              </div>
              <div className="modal_section">
                <label>
                  <span className="count">2</span>
                  Update your <b>percentile</b>
                </label>
                <input type="number" max={100} value={percentile} onChange={(e)=>setPercentile(e.target.value)}  required />
              </div>
              <div className="modal_section">
                <label>
                  <span className="count">3</span>
                  Update your <b>current score (out of 15)</b>
                </label>
                <input type="number" max={15} value={answers} onChange={(e)=>setAnswers(e.target.value)}  required />
              </div>
            </div>
            <div className="footer">
              <button className="cancel" onClick={()=>setModal(false)} >
                Cancel
              </button>
              <button className="confirm" >
                Save
              </button>
            </div>
          </form>
        </div>
          </div>
          )
  )
}

export default ModalBox;
