import { Link } from "react-router-dom";
import { HomePageVideos } from "../Types";

export default function Card({ data }: { data: HomePageVideos }) {
  const isData = data ? true : false;
  return (
    <div className="w-64 h-60 flex gap-3 flex-col">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={isData ? data.videoThumbnail : ""}
            alt="thumbnail"
            className="h-44 w-72"
          />
        </Link>
      </div>

      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={isData ? data.channelInfo.image : ""}
              alt="channel"
              className="w-12 h-12 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#" className="line-clamp-2">
              {isData ? data.videoTitle : ""}
            </a>
          </h3>
          <div className="text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              {isData ? data.channelInfo.name : ""}
            </a>

            <div>
              <span className="after:content-['•'] after:mx-1">
                {isData ? data.videoViews : ""} views
              </span>
              <span>{isData ? data.videoAge : ""}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
