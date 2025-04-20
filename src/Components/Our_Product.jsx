import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft, FaRegStar, FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import Female1 from "../assets/Female1.png";
import Female2 from "../assets/Female2.png";
import Female5 from "../assets/Female5.png";
import Female6 from "../assets/Female6.png";
import Female7 from "../assets/Female7.png";
import Female8 from "../assets/Female8.png";
import Female9 from "../assets/Female9.png";
import Male2 from "../assets/Male2.png";
import Male3 from "../assets/Male3.png";
import { motion } from "framer-motion";
import "./Our_Product.css";

const Our_Product = () => {
  const [activeCategory, setActiveCategory] = useState("arrivals");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="Our_Product">
      <h1 className="Product_title">Our Product</h1>

      {/* Tabs */}
      <motion.div className="tabs"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
        <button
          className={`tab ${activeCategory === "arrivals" ? "active" : ""}`}
          onClick={() => handleCategoryChange("arrivals")}
        >
          Arrivals
        </button>
        <button
          className={`tab ${activeCategory === "populars" ? "active" : ""}`}
          onClick={() => handleCategoryChange("populars")}
        >
          Populars
        </button>
        <button
          className={`tab ${activeCategory === "special" ? "active" : ""}`}
          onClick={() => handleCategoryChange("special")}
        >
          Special Occasion
        </button>
      </motion.div>

      {/* Product Sliders */}
      <motion.div className="Product_sliders"
     initial={{ opacity: 0, y: -20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}
      >
        {activeCategory === "arrivals" && (
          <>
            <div className="Product_slider">
              <div className="slide">
                <img src={product1} alt="" className="Product_slider_img" />
                <h4>Color Wonder</h4>
                <p>$32.99</p>
                <div className="rs_first">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} fill="#FAB83B" className="star_icon" />
                  ))}
                </div>
              </div>
            </div>
            <div className="Product_slider">
              <div className="slide">
                <img src={product4} alt="" className="Product_slider_img" />
                <h4>Leather Summer</h4>
                <p>$32.99</p>
                <div className="rs_first">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} fill="#FAB83B" className="star_icon" />
                  ))}
                </div>
              </div>
            </div>
            <div className="Product_slider">
              <div className="slide">
                <img src={Female1} alt="" className="Product_slider_img" />
                <h4>Floral Elegance</h4>
                <p>$32.99</p>
                <div className="rs_first">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} fill="#FAB83B" className="star_icon" />
                  ))}
                </div>
              </div>
            </div>
            <div className="Product_slider">
              <div className="slide">
                <img src={Female2} alt="" className="Product_slider_img" />
                <h4>Bold and Bright</h4>
                <p>$32.99</p>
                <div className="rs_first">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} fill="#FAB83B" className="star_icon" />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeCategory === "populars" && (
          <>
            <div className="Product_slider">
              <div className="slide">
                <img src={product2} alt="" className="Product_slider_img" />
                <h4>Button Up Shirts</h4>
                <p>$25.99</p>
                <div className="rs_second">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} fill="#FAB83B" className="star_icon" />
                  ))}
                </div>
              </div>
            </div>
            <div className="Product_slider">
              <div className="slide">
                <img src={Female5} alt="" className="Product_slider_img" />
                <h4>Floral Elegance</h4>
                <p>$25.99</p>
                <div className="rs_second">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} fill="#FAB83B" className="star_icon" />
                  ))}
                </div>
              </div>
            </div>
            <div className="Product_slider">
              <div className="slide">
                <img src={Male2} alt="" className="Product_slider_img" />
                <h4>Cool and Casual</h4>
                <p>$25.99</p>
                <div className="rs_second">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} fill="#FAB83B" className="star_icon" />
                  ))}
                </div>
              </div>
            </div>
            <div className="Product_slider">
              <div className="slide">
                <img src={Female6} alt="" className="Product_slider_img" />
                <h4>Denim Days</h4>
                <p>$25.99</p>
                <div className="rs_second">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} fill="#FAB83B" className="star_icon" />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeCategory === "special" && (
          <>
            <div className="Product_slider">
              <div className="slide">
                <img src={product3} alt="" className="Product_slider_img" />
                <h4>Lift Sports Wear</h4>
                <p>$16.99</p>
                <div className="rs_third">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} fill="#FAB83B" className="star_icon" />
                  ))}
                </div>
              </div>
            </div>
            <div className="Product_slider">
              <div className="slide">
                <img src={Female7} alt="" className="Product_slider_img" />
                <h4>Embroidered Denim</h4>
                <p>$16.99</p>
                <div className="rs_third">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} fill="#FAB83B" className="star_icon" />
                  ))}
                </div>
              </div>
            </div>
            <div className="Product_slider">
              <div className="slide">
                <img src={Male3} alt="" className="Product_slider_img" />
                <h4>Sustainable Style</h4>
                <p>$16.99</p>
                <div className="rs_third">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} fill="#FAB83B" className="star_icon" />
                  ))}
                </div>
              </div>
            </div>
            <div className="Product_slider">
              <div className="slide">
                <img src={Female8} alt="" className="Product_slider_img" />
                <h4>Street Style Comfort</h4>
                <p>$16.99</p>
                <div className="rs_third">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} fill="#FAB83B" className="star_icon" />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>

      {/* Pagination */}
      <div className="pagination_slider">
        <a href="#" className="shapesbtn">
          <FaAngleLeft size={40} className="arrow" />
        </a>
        {[...Array(4)].map((_, i) => (
          <a href="#" key={i} className="shapesbtn">
            <LuDot size={40} className="circledots" />
          </a>
        ))}
        <a href="#" className="shapesbtn">
          <FaAngleRight size={40} className="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Our_Product;