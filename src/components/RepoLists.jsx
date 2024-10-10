import React, { useEffect } from 'react'
import { fetchRepoRequest } from '../redux/repo/repoSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function RepoLists() {
  const dispatch = useDispatch(); 
  const { repositories, loading, error } = useSelector(state => state.repo.repo);

  console.log('RepoList', repositories);

  useEffect(() => {
    dispatch(fetchRepoRequest());
  }, []);

  return (
    <div className='text-white '>
          <div className='text-'>RepoLists</div>
          

    </div>
  )
}
