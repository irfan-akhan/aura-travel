"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { TOURS } from "@/constants";
import { useParams } from "next/navigation";
import Spinner from "../../../components/Spinner";
import styles from "./tour.module.css";

export default function page() {
  const { tourtype: destination } = useParams();
  const [selected, setselected] = useState(null);
  const [showData, setShowData] = useState(false);
  const tour = TOURS.find((item) => item.tourHeading === destination);

  function handleSingleClick(currentId) {
    setselected(currentId === selected ? null : currentId);
  }

  if (!tour) {
    <Spinner />;
  }
  return (
    <div className="min-h-screen py-6 mt-28 w-full">
      <div className="flex items-start justify-between h-[60vh] w-full mx-20 gap-28 max-[720px]:block max-[720px]:mx-0 max-[720px]:px-4">
        <div className="flex w-1/2 flex-col gap-5 items-start text-gray-50 max-[720px]:w-full">
          <h1 className="text-4xl font-semibold text-black text-left mb-5 max-[720px]:text-3xl">
            {tour?.title}
          </h1>
          <p className=" max-[720px]: text-left"> {tour?.overview}</p>
          
        </div>
        <div className="flex w-1/2 items-center gap-7 max-[720px]:w-full max-[720px]:gap-3 max-[720px]:mt-10">
          <div className="flex flex-col gap-5">
            <Image
              src="/tour2.jpg"
              height={120}
              width={200}
              alt="tour-img"
              loading="lazy"
              style={{ width: "220px", height: "200px" }}
              className="shadow-2xl"
            />
            <Image
              src="/tour3.jpg"
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
              src="/tour4.jpg"
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
      <div className="mx-20 max-[720px]:mx-4 max-[720px]:mt-[80vh]">
        <h1 className="text-4xl font-semibold my-14 max-[720px]:text-3xl">Included/Excluded</h1>
        <div className="flex gap-[12rem] max-[720px]:block">
          <div className="flex flex-col gap-8">
            <div className="flex justify-start items-center gap-3">
              <span>
                <TiTick size={25} color="#8BC34A" />
              </span>
              <span>02 Nights in Hotels/Houseboat as per Itinerary</span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <span>
                <TiTick size={25} color="#8BC34A" />
              </span>
              <span>Breakfast & Dinner</span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <span>
                <TiTick size={25} color="#8BC34A" />
              </span>
              <span>1 Hour Shikara Ride</span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <span>
                <TiTick size={25} color="#8BC34A" />
              </span>
              <span>All Transfers</span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <span>
                <TiTick size={25} color="#8BC34A" />
              </span>
              <span>Sightseeing in Srinagar</span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <span>
                <TiTick size={25} color="#8BC34A" />
              </span>
              <span>Toll Taxes</span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <span>
                <TiTick size={25} color="#8BC34A" />
              </span>
              <span>Parking Charges</span>
            </div>
          </div>
          <div className="flex flex-col gap-8 max-[720px]:mt-10">
            <div className="flex justify-start items-center gap-3">
              <span>
                <RxCross2 size={25} color="#FF2029" />
              </span>
              <span>Airfare & Train</span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <span>
                <RxCross2 size={25} color="#FF2029" />
              </span>
              <span>Lunch</span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <span>
                <RxCross2 size={25} color="#FF2029" />
              </span>
              <span>Pony Ride</span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <span>
                <RxCross2 size={25} color="#FF2029" />
              </span>
              <span>Gandola Ride</span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <span>
                <RxCross2 size={25} color="#FF2029" />
              </span>
              <span>Pahalgam Sightseeing</span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <span>
                <RxCross2 size={25} color="#FF2029" />
              </span>
              <span>Entrance Tickets</span>
            </div>
            <div className="flex justify-start items-center gap-3">
              <span>
                <RxCross2 size={25} color="#FF2029" />
              </span>
              <span>Activities</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center my-28 min-h-full max-[720px]:block max-[720px]:my-4">
        <div className="w-1/2 z-50 max-[720px]:w-full">
          <div className="flex gap-5 justify-end items-center z-[100] -mr-48 max-[720px]:block max-[720px]:-mr-0">
            <Image
              src="/tour1.jpg"
              height={320}
              width={200}
              alt="tour-img"
              loading="lazy"
              style={{ width: "400px", height: "350px" }}
              className="shadow-2xl"
            />
            <Image
              src="/tour5.jpg"
              height={320}
              width={200}
              alt="tour-img"
              loading="lazy"
              style={{ width: "400px", height: "350px" }}
              className="shadow-2xl"
            />
          </div>
        </div>
        <div className="w-3/2 bg-[#031F0F] z-0 min-h-[90vh] text-[#A4A4A4] pl-56 pt-6 max-[720px]:pl-0 max-[720px]:w-full max-[720px]:mt-16">
          <h2 className="text-xl text-gray-300 font-medium mb-3 max-[720px]:ml-2">
            HAVE A LOOK IN DETAIL
          </h2>
          {tour.tourDetails && tour?.tourDetails.length
            ? tour?.tourDetails.map((item) => (
                <div className={styles.wrapper} key={item?.id}>
                  <div className={styles.accordian}>
                    <div
                      className={styles.item}
                      s
                      onClick={() => {
                        handleSingleClick(item.id);
                        setShowData(!showData);
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
                        <div className={styles.content}>
                          {item?.detail}
                        </div>
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
