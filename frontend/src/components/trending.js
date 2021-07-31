import React, { useState } from "react";
import { GET_TODAY, GET_WEEK, GET_MONTH } from "../gql/trending/query";
import { useQuery } from "@apollo/client";

const Trending = () => {
  const [selected, setSelected] = useState("today");

  const [todayOpen, setTodayOpen] = useState(true);
  const [weekOpen, setWeekOpen] = useState(false);
  const [monthOpen, setMonthOpen] = useState(false);

  const TrendingList = (props) => {
    const { data, loading } = useQuery(props.query);
    return (
      <div>
        {!loading && data && (
          <div>
            {data.posts.map((post) => (
              <div className="rounded border-2 border-solid relative m-4">
                <div>
                  <a href={`/post/${post.id}`}>
                    <h1 className="w-full mt-1 md:mt-2 mx-2 md:mx-4 text-bold text-3xl">
                      {post.title}
                    </h1>
                  </a>
                  <h1 className="text-gray-300"> posted by</h1>
                  <a href={`/profile/${post.author.id}`}>
                    <h1> {post.author.email} </h1>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-bold text-2xl">Trending </h1>
      <ul className="bg-blue-200 rounded-full p-2 flex flex-wrap space-x-3 ">
        <li>
          {" "}
          <button
            className={`text-extrabold text-lg hover:bg-blue-300 ${
              todayOpen && "border-2"
            }`}
            onClick={() => {
              setTodayOpen(true);
              setWeekOpen(false);
              setMonthOpen(false);
            }}
          >
            {" "}
            Today
          </button>
        </li>
        <li>
          <button
            className={`text-extrabold text-lg hover:bg-blue-300 ${
              weekOpen && "border-2"
            }`}
            onClick={() => {
              setWeekOpen(true);
              setTodayOpen(false);
              setMonthOpen(false);
            }}
          >
            This Week
          </button>
        </li>
        <li>
          <button
            className={`text-extrabold text-lg hover:bg-blue-300 ${
              monthOpen && "border-2"
            }`}
            onClick={() => {
              setMonthOpen(true);
              setTodayOpen(false);
              setWeekOpen(false);
            }}
          >
            This Month
          </button>
        </li>
      </ul>

      <div>
        {todayOpen && (
          <div>
            <TrendingList query={GET_TODAY} />
          </div>
        )}
        {weekOpen && (
          <div>
            <TrendingList query={GET_WEEK} />
          </div>
        )}
        {monthOpen && (
          <div>
            <TrendingList query={GET_MONTH} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Trending;
