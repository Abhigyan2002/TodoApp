import React from 'react'

function CompletedCards(props) {
  return (
    <div className="card text-start w-100 mb-3">
            <div className="row g-3">
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5> 
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default CompletedCards
