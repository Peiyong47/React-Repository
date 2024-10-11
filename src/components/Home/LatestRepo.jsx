import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepoRequest, clearRepos } from '../../redux/repo/repoSlice';

export default function LatestRepo() {
    const dispatch = useDispatch(); 
    const { repositories, loading, error, hasMoreRepos } = useSelector(state => state.repo);
    const [latestRepos, setLatestRepos] = useState([]);
    const [page, setPage] = useState(1);
  
    console.log('RepoList', repositories);
  
    useEffect(() => {
        dispatch(clearRepos());
        dispatch(fetchRepoRequest({page: 1, perPage: 10}));
        // if(repositories && repositories.length > 0) {
        //     setLatestRepos(repositories.slice(0, 10));
        // }
    }, [dispatch]);

    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        dispatch(fetchRepoRequest({page: nextPage, perPage: 10}));

    }
    
    return (
        <div>
           {hasMoreRepos && <button onClick={loadMore}>Load More</button>} 
        </div>
    )
}
