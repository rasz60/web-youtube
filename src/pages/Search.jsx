import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'

import VideoSearch from '../components/videos/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
    /*
        // youtube data API
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        )
        .then(response => response.json())
        .then(result => {
            setVideos(result.items)
        })
        .catch(error => console.log(error));
    */
        setVideos([]);
        fetchVideos(searchId);
        setLoading(true);

    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        // rapid API
        fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`) //parameter type=video 추가, 오류 체감될 때 넣어야지
            .then((data)=> {
                setNextPageToken(data.nextPageToken);
                setVideos((prevVideos) => [...prevVideos, ...data.items]);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    const handleLoadMore = () => {
        if(nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    }

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main title="유튜브 검색" description="유튜브 검색 결과 페이지입니다.">
            <section id='searchPage' className={searchPageClass}>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
                <div className="video__more">
                    {nextPageToken && (
                        <button onClick={handleLoadMore}>더 보기</button>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Search