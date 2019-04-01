import React from 'react';
import { Link } from 'gatsby';

function InstructorItem({ instructor }) {
  return (
    <div className='w-full lg:flex px-4 py-4'>

      <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' style={{
        backgroundImage: `url(https:${instructor.avatar.file.url}?w=192&f=face&fit=thumb)`}} title={instructor.title}>
  </div>
    
  <div className="border-r w-full border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      
      <div className="text-black font-bold text-xl mb-2">
        <Link to={`/instructors/${instructor.slug}`} 
          className='text-black no-underline hover:underline'>
          {instructor.fullName}
        </Link>
      </div>

      <p className="text-grey-darker text-base">{instructor.bio.bio}</p>
    </div>
  </div>
    </div>
  );
}

export default InstructorItem;
