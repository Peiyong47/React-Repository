import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepoRequest, clearRepos } from '../../redux/repo/repoSlice';
import { FaCodeBranch, FaRegEye, FaStar } from 'react-icons/fa';
import { FaCodeFork } from 'react-icons/fa6';
import { Button, Spinner } from 'flowbite-react';
import Repo from './Repo';
import Loading from '../Loading';

export default function RepoLists() {
  const dispatch = useDispatch(); 
  const { repositories, loading, error, hasMoreRepos } = useSelector(state => state.repo);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(clearRepos());
    dispatch(fetchRepoRequest({ page: 1, perPage: 10 }));
  }, [dispatch]);

  const loadMore = () => {
    if (hasMoreRepos) {
      const nextPage = page + 1;
      setPage(nextPage);
      dispatch(fetchRepoRequest({ page: nextPage, perPage: 10 }));
    }
  };

  return (
    <div className='max-w-5xl mx-auto px-4 flex flex-col gap-8 mt-12 mb-14'>
      <h1 className='text-darkBlue-400 font-bold text-2xl'>All Repositories</h1>
      {
        loading && <Loading />
      }
      {repositories.length > 0 && !error && (
        <>
          {repositories.map((repo) => (
            <Repo key={repo.id} repo={repo} />
          ))}
          {hasMoreRepos && (
            <Button 
              type='button'
              onClick={loadMore}
              className='text-westly border-westly rounded-lg '>
              {
                loading ? <Spinner size='sm' className='text-westly ' /> : 'Show More'
              }
            </Button>
          )}
        </>
      )}
    </div>
  );
}



