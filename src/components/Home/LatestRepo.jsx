import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepoRequest, clearRepos } from '../../redux/repo/repoSlice';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import Repo from '../Repositories/Repo';

export default function LatestRepo() {
    const dispatch = useDispatch(); 
    const { repositories, loading, error } = useSelector(state => state.repo);
    
    useEffect(() => {
        dispatch(clearRepos());
        dispatch(fetchRepoRequest({page: 1, perPage: 10}));
    }, [dispatch]);
    
    return (
        <div className='max-w-5xl mx-auto px-4 flex flex-col gap-8 mt-12 mb-14'>
        {
            loading && ( 
                <Loading />
            )
        }
        {
            repositories.length > 0 && !loading && !error && (
            <>
                {
                    repositories.map(repo => (
                        <Repo key={repo.id} repo = {repo} />
                    ))
                }
                <Link to='/reactjs' className='flex justify-center p-2 rounded-lg border border-westly text-westly hover:bg-westly hover:text-westly-100' >
                    <div className='flex items-center gap-2 font-medium'>
                        <span>View all repositories</span>
                    </div>
                </Link>
            </>
            )
        } 
        </div>
    )
}
