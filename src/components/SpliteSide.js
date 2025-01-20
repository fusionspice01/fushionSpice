import React from 'react'

function SpliteSide() {
    return (
        <>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-4">
                        <div id="list-example" class="list-group">
                            <h1>Our different food services</h1>
                            <p>In addition to traditional food services, our expertise
                                includes retail services, food delivery, meal and food
                                vouchers as well as digital food ordering services.</p>
                        </div>
                    </div>

                    <div class="col-8">
                        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                            <h1 id="list-item-1">On-site dining</h1>
                            <p className='fs-5'>Food is our heritage, it's what we do! Our global expertise and broad range of services allows us to bring inspiring on-site dining solutions to thousands of client locations globally. Our menus include sustainable recipes, fresh and healthy ingredients, with a wide range of delicious options.</p>
                            <h1 id="list-item-2">On-site dining</h1>
                            <p className='fs-5'>Food is our heritage, it's what we do! Our global expertise and broad range of services allows us to bring inspiring on-site dining solutions to thousands of client locations globally. Our menus include sustainable recipes, fresh and healthy ingredients, with a wide range of delicious options.</p>
                            <h1 id="list-item-3">On-site dining</h1>
                            <p className='fs-5'>Food is our heritage, it's what we do! Our global expertise and broad range of services allows us to bring inspiring on-site dining solutions to thousands of client locations globally. Our menus include sustainable recipes, fresh and healthy ingredients, with a wide range of delicious options.</p>
                            <h1 id="list-item-4">On-site dining</h1>
                            <p className='fs-5'>Food is our heritage, it's what we do! Our global expertise and broad range of services allows us to bring inspiring on-site dining solutions to thousands of client locations globally. Our menus include sustainable recipes, fresh and healthy ingredients, with a wide range of delicious options.</p>

                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default SpliteSide