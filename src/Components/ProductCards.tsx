import { useState } from "react";

function ProductCards({ product }: any) {
    const [seeMore, setSeeMore] = useState(false);
    return (
        <div className="card">

            <section className="landscape-section">
                <div className="image">
                    <img src={product.image} alt={product.title} />
                </div>
            </section>

            <section className="content-section">
                <div>
                    <h2 className="product-title">
                        {product.title}
                    </h2>

                    <span className="product-rating">
                        {(() => {
                            const stars = [];
                            for (let i = 0; i < Math.round(product.rating.rate); i++) {
                                stars.push(<span className="star" key={i} style={{ width: '10px' }}>★</span>);
                            }
                            return stars;
                        })()} {product.rating.rate}
                        <span className="rating-count">({product.rating.count})</span>
                    </span>
                </div>

                <p className={`product-desc ${!seeMore ? "clamped" : ""}`}>
                    {product.description} <br/>
                    <span className="see-more" onClick={() => setSeeMore(!seeMore)}>
                        {seeMore ? " See Less" : " See More"}
                    </span>
                </p>
                <p className="product-category">
                    {product.category}
                </p>

                <h3 className="product-price">
                    ${product.price}
                </h3>

                <button className="product-btn">
                    Add to Cart
                </button>

            </section>

        </div>
    )
}

export default ProductCards