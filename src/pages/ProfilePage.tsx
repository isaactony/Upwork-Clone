import React from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileStats from '../components/profile/ProfileStats';
import ProfileLanguages from '../components/profile/ProfileLanguages';
import ProfileEducation from '../components/profile/ProfileEducation';
import ProfileWorkHistory from '../components/profile/ProfileWorkHistory';
import ProfileLinkedAccounts from '../components/profile/ProfileLinkedAccounts';

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProfileHeader />
      
      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-3 space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">View profile</h2>
            <div className="space-y-2">
              <button className="w-full text-left text-green-500 hover:text-green-400">Technical Writing</button>
              <button className="w-full text-left text-green-500 hover:text-green-400">Back-End Development</button>
              <button className="w-full text-left text-green-500 hover:text-green-400">All work</button>
            </div>
          </div>
          
          <ProfileStats />
          <ProfileLanguages />
          <ProfileEducation />
          <ProfileLinkedAccounts />
        </div>

        <div className="col-span-9">
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">Backend Developer | Java | Springboot | Microservices | Kafka</h1>
                <p className="text-gray-400">Specializes in Back-End Development</p>
              </div>
              <div className="text-2xl font-bold text-white">$40.00/hr</div>
            </div>
            
            <p className="text-gray-300 mt-6">
              I am a backend developer with extensive hands-on experience in building and optimizing scalable, data-driven applications using Java and the Spring Boot ecosystem. My expertise spans across relational and NoSQL databases, cloud platforms (AWS), and modern development tools such as Docker, Git, and a range of big data technologies, making me proficient in creating robust and efficient backend systems for data-intensive environments.
            </p>
            <p className="text-gray-300 mt-4">
              I have a strong command of big data processing and streaming frameworks such as Apache Kafka...
            </p>
            <button className="text-green-500 hover:text-green-400 mt-2">more</button>
          </div>

          <ProfileWorkHistory />
        </div>
      </div>
    </div>
  );
}