import React, { useEffect } from 'react'
import { fetchRepoRequest } from '../redux/repo/repoSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function RepoLists() {
  const dispatch = useDispatch(); 
  const { repositories, loading, error } = useSelector(state => state.repo);

  console.log('RepoList', repositories);

  useEffect(() => {
    dispatch(fetchRepoRequest());
  }, [dispatch]);

  return (
    <div className=''>
          <div className=''>RepoLists</div>
          

    </div>
  )
}
