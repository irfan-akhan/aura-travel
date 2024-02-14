"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { TOURS } from "@/constants";
import { useParams } from "next/navigation";
import styles from "./tour.module.css";

export default function page() {
  const {tour : destination} = useParams()
  const [selected, setselected] = useState(null);
  const [showData, setShowData] = useState(false);
  const tourDetails = TOURS.map((item) => item.tourDetails)[0]
  
  console.log(destination, "tourtype")

  function handleSingleClick(currentId) {
    console.log(currentId, "currentID")
    setselected(currentId === selected ? null : currentId);
  }
  return (
    <div className="min-h-screen py-6 mt-28 w-full">
      <div className="flex gap-28 items-start h-[60vh] w-full mx-20">
        <div className="w-1/2 flex flex-col gap-5 items-start text-gray-50">
          <h1 className="text-4xl font-semibold text-black">Tour Heading</h1>
          <p>
            Embark on an unforgettable 3-day, 2-night exploration of the idyllic
            landscapes of Kashmir, famously known as the 'Paradise on Earth.'
            This meticulously crafted tour promises a perfect blend of cultural
            immersion and natural beauty, offering a unique perspective of the
            region's charm.
          </p>{" "}
          <p>
            The journey commences amidst the awe-inspiring peaks of Gulmarg,
            providing a backdrop of unparalleled beauty. Day two invites you to
            gracefully glide across the pristine waters of Dal Lake on a
            Shikara, absorbing the cultural richness of Srinagar.
          </p>{" "}
          <p>
            Immerse yourself in the warmth of local hospitality, and witness the
            rich tapestry of Kashmir's heritage. Engage in genuine cultural
            exchanges that add depth to your travel experience.
          </p>
          <p>
            This thoughtfully designed itinerary ensures that every moment
            becomes a cherished memory, capturing the essence of Kashmir in a
            compact yet enriching 3-day escape.
          </p>
        </div>
        <div className="flex items-center gap-7">
          <div className="flex flex-col gap-5">
            <Image
              src="/tour1.jpg"
              height={120}
              width={200}
              alt="tour-img"
              loading="lazy"
              style={{ width: "220px", height: "200px" }}
              className="shadow-2xl"
            />
            <Image
              src="/tour1.jpg"
              height={120}
              width={200}
              alt="tour-img"
              loading="lazy"
              style={{ width: "220px", height: "200px" }}
              className="shadow-2   xl"
            />
          </div>
          <div>
            <Image
              src="/tour1.jpg"
              height={800}
              width={200}
              alt="tour-img"
              loading="lazy"
              style={{ width: "220px", height: "420px" }}
              className="shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="mx-20">
        <h1 className="text-4xl font-semibold my-14">Included/Excluded</h1>
        <div className="flex gap-[12rem]">
          <div className="flex flex-col gap-8">
            <div className="flex justify-center items-center gap-3">
              <span>
                <TiTick size={25} color="#8BC34A" />
              </span>
              <span>02 Nights in Hotels/Houseboat as per Itinerary</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span>
                <TiTick size={25} color="#8BC34A" />
              </span>
              <span>02 Nights in Hotels/Houseboat as per Itinerary</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span>
                <TiTick size={25} color="#8BC34A" />
              </span>
              <span>02 Nights in Hotels/Houseboat as per Itinerary</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span>
                <TiTick size={25} color="#8BC34A" />
              </span>
              <span>02 Nights in Hotels/Houseboat as per Itinerary</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span>
                <TiTick size={25} color="#8BC34A" />
              </span>
              <span>02 Nights in Hotels/Houseboat as per Itinerary</span>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex justify-center items-center gap-3">
              <span>
                <RxCross2 size={25} color="#FF2029" />
              </span>
              <span>Airfare & Train</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span>
                <RxCross2 size={25} color="#FF2029" />
              </span>
              <span>Airfare & Train</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span>
                <RxCross2 size={25} color="#FF2029" />
              </span>
              <span>Airfare & Train</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span>
                <RxCross2 size={25} color="#FF2029" />
              </span>
              <span>Airfare & Train</span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span>
                <RxCross2 size={25} color="#FF2029" />
              </span>
              <span>Airfare & Train</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center my-28 min-h-full">
        <div className="w-1/2 z-50">
          <div className="flex gap-5 justify-end items-center z-[100] -mr-48">
            <Image
              src="/tour1.jpg"
              height={320}
              width={200}
              alt="tour-img"
              loading="lazy"
              style={{ width: "350px", height: "350px" }}
              className="shadow-2xl"
            />
            <Image
              src="/tour1.jpg"
              height={320}
              width={200}
              alt="tour-img"
              loading="lazy"
              style={{ width: "350px", height: "350px" }}
              className="shadow-2xl"
            />
          </div>
        </div>
        <div className="w-3/2 bg-[#031F0F] z-0 min-h-[90vh] text-[#A4A4A4] pl-56 pt-6">
          <h2 className="text-xl text-gray-300 font-medium mb-3">
            HAVE A LOOK IN DETAIL
          </h2>
          {tourDetails && tourDetails.length
            ? tourDetails.map((item) => (
                <div className={styles.wrapper} key={item?.id}>
                  <div className={styles.accordian}>
                    <div
                      className={styles.item}
                      s
                      onClick={() => {
                        handleSingleClick(item.id);
                        setShowData(!showData);
                        console.log(item, "from click")
                      }}
                    >
                      <div className="text-green-300 flex justify-between">
                        <h3>{item?.day}</h3>
                
                        <span>
                          {showData ? (
                            <MdOutlineKeyboardArrowUp />
                          ) : (
                            <MdKeyboardArrowDown />
                          )}
                        </span>
                      </div>
                      {selected === item?.id ? (
                        <div className={styles.content}>{item?.detail} {console.log(item)}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
