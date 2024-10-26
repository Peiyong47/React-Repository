import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepoRequest, clearRepos } from '../../redux/repo/repoSlice';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import Repo from '../Repositories/Repo';
import toast, { Toaster } from 'react-hot-toast';

export default function LatestRepo() {
    const dispatch = useDispatch(); 
    const { repositories, loading, error } = useSelector(state => state.repo);
    
    useEffect(() => {
        dispatch(clearRepos());
        dispatch(fetchRepoRequest({page: 1}));
    }, [dispatch]);

    useEffect(() => {
        if (error) {
          toast.error('An error has occurred. Please try again later.');  
        }
    }, [error]);
    
    return (
        <div className='max-w-5xl mx-auto px-4 flex flex-col gap-7 mt-12 mb-14'>
        {
            loading && <Loading />
        }
        {
            error && <Toaster />
        }
        {
            repositories.length > 0 && !loading && !error && (
            <>
                {
                    repositories.map(repo => (
                        <Repo key={repo.id} repo={repo} />
                    ))
                }
                <Link to='/repositories' className='flex font-medium justify-center p-2 rounded-lg border border-westly text-westly hover:bg-westly hover:text-westly-100' >
                    View all repositories
                </Link>
            </>
            )
        } 
        </div>
    )
}
