import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import "./css/Style.css";

const PriceCard = ({ data }) => {
  return (
    <div id="priceCardMainContent" style={{ padding: "110px" }}>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {data.map((iteam, index) => {
          return (
            <>
              <div key={index}>
                <div class="col">
                  <div class="card">
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div class="card-body">
                      <h6 class="card-top">{iteam.title}</h6>
                      <h4 class="card-title">${iteam.price}/month</h4>
                      <hr></hr>
                      <ul>
                        <li style={{ whiteSpace: "nowrap" }}>
                          <span class="tick-mark"></span>
                          {iteam.user}
                        </li>
                        <li style={{ whiteSpace: "nowrap" }}>
                          <span class="tick-mark"></span>
                          {iteam.storageData}
                        </li>
                        <li style={{ whiteSpace: "nowrap" }}>
                          <span class="tick-mark"></span>
                          {iteam.project}
                        </li>
                        <li style={{ whiteSpace: "nowrap" }}>
                          <span class="tick-mark"></span>
                          {iteam.access}
                        </li>
                        <li
                          style={{ whiteSpace: "nowrap" }}
                          className={iteam.price == 0 ? "text-muted" : null}
                        >
                          <span
                            className={
                              iteam.price == 0
                                ? "small-x"
                                : iteam.price > 0
                                ? "tick-mark"
                                : null
                            }
                          ></span>
                          {iteam.unlimitedPP}
                        </li>
                        <li
                          style={{ whiteSpace: "nowrap" }}
                          className={iteam.price == 0 ? "text-muted" : null}
                        >
                          <span
                            className={
                              iteam.price == 0
                                ? "small-x"
                                : iteam.price > 0
                                ? "tick-mark"
                                : null
                            }
                          ></span>
                          {iteam.dedicatedPS}
                        </li>
                        <li
                          style={{ whiteSpace: "nowrap" }}
                          className={iteam.price == 0 ? "text-muted" : null}
                        >
                          <span
                            className={
                              iteam.price == 0
                                ? "small-x"
                                : iteam.price > 0
                                ? "tick-mark"
                                : null
                            }
                          ></span>
                          {iteam.domain}
                        </li>
                        <li
                          style={{ whiteSpace: "nowrap" }}
                          className={iteam.price <= 9 ? "text-muted" : null}
                        >
                          <span
                            className={
                              iteam.price == 49
                                ? "tick-mark"
                                : iteam.price <= 9
                                ? "small-x"
                                : null
                            }
                          ></span>
                          {iteam.statusReport}
                        </li>
                      </ul>
                    </div>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PriceCard;
