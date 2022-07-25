import React from 'react'
import './Crousel.css'
import Button from '../Button/Button'
import CardData from '../../../Json/CardData.json'

const sliceData = (arr, sliceSize) => {
    let finalArr = []
    for (let i = 0, tempArr = [], count = 0; i < Math.ceil(arr.length / sliceSize); i++) {
        for (let j = 0; j < sliceSize; j++) {
            if (arr[count]) {
                tempArr.push(arr[count])
            }
            count++
        }

        finalArr.push(tempArr)
        tempArr = []
    }

    return finalArr
}

const Crousel = ({ slideCount }) => {
    return (
        <>
            <div id={`carouselExampleControls-${slideCount}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        sliceData(CardData, slideCount).map((item, index) => {
                            return <>
                                <div key={`key-${index}`} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <div className="row g-0 py-4 justify-content-center align-items-center w-100">

                                        {
                                            item.map((main_item, index) => {

                                                return (
                                                    <>
                                                        <div key={`key_${index}`} className="col-lg-4 col-md-6 col-12">
                                                            <div className="cards">
                                                                <div className="cards-image-top">
                                                                    <img src={main_item.imageSource} alt="CardImage" />
                                                                </div>
                                                                <div className="cards-down">
                                                                    <p className="cards-text">{main_item.text}</p>
                                                                    <Button text="Read More..." />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>

                <div className="controller">
                    <div className="left">
                        <button type="button" data-bs-target={`#carouselExampleControls-${slideCount}`} data-bs-slide="prev">
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="right">
                        <button type="button" data-bs-target={`#carouselExampleControls-${slideCount}`} data-bs-slide="next">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Crousel