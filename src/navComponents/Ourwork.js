import React from 'react'
import Select from 'react-select';
import css from './Ourwork.module.css'


const Ourwork = () => {
  var n=0

  const locationOption = [
    { value: 'bangalore', label: 'BANGALORE' },
    { value: 'chennai', label: 'CHENNAI' },
    { value: 'kochi', label: 'KOCHI' },
  ];
  const projectStatus = [
    { value: 'ongoing', label: 'ON GOING' },
    { value: 'completed', label: 'COMPLETED' },
    { value: 'new', label: 'NEW' },
  ];
  const budgetRange = [
    { value: '20-40', label: '20L-40L' },
    { value: '40-60', label: '40L-60L' },
    { value: '60-80', label: '60L-80L' },
    { value: '80-1', label: '80L-1CR' },
    { value: '1+', label: '1CR+' },
  ];
  return (
    <div className={css.container}>
      <p className={css.ourwork}>OUR WORKS</p>
      <div className={css.menuContainer}>
        <Select 
          className={css.filters}
          options={locationOption }
          isSearchable={true} 
          placeholder="ALL LOCATIONS"
        />
        <Select
          className={css.filters}
          options={projectStatus }
          isSearchable={true}
          placeholder="PROJECT STATUS"
        />
        <Select
          className={css.filters}
          options={budgetRange }
          isSearchable={true} 
          placeholder="BUDGET RANGE"
        />
      </div>
      <div className={css.searchHistory}>
        <p>Showing {n} project</p>
        <button type="button">Clear filter</button>
      </div>
      <div>
        IMAGES
      </div>
    


    </div>
  );
};

export default Ourwork
