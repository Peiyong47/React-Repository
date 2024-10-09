import React, { useEffect } from 'react'
import { fetchRepoRequest } from '../redux/repo/repoSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function RepoLists() {
  const dispatch = useDispatch(); 
  const { repositories, loading, error } = useSelector(state => state.repo);
  console.log('repositories in repolist',repositories);

  useEffect(() => {
    dispatch(fetchRepoRequest());
  }, [dispatch]);

  return (
    <div>RepoLists</div>
  )
}
