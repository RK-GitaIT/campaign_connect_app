"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useCampaign } from '../context/CampaignContext';
import { Agent } from '../interfaces/models';

export default function Header() {
  const { agent, updateAgentStatus } = useCampaign();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!agent) return null;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Campaign Connect"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="ml-4">
              <h1 className="text-xl font-semibold text-gray-900">Campaign Connect</h1>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                {agent.avatar ? (
                  <Image
                    src={agent.avatar}
                    alt={agent.name}
                    width={40}
                    height={40}
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/default-avatar.svg';
                      target.onerror = () => {
                        target.style.display = 'none';
                        target.parentElement?.classList.add('bg-gradient-to-br', 'from-indigo-500', 'to-purple-500');
                        const initials = agent.name.split(' ').map(n => n[0]).join('').toUpperCase();
                        const span = document.createElement('span');
                        span.className = 'w-full h-full flex items-center justify-center text-white font-semibold text-lg';
                        span.textContent = initials;
                        target.parentElement?.appendChild(span);
                      };
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {agent.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${
                agent.status === 'online' ? 'bg-green-500' :
                agent.status === 'away' ? 'bg-yellow-500' :
                'bg-gray-500'
              }`}></div>
            </div>

            <div className="ml-4 relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <span className="mr-2">{agent.name}</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        updateAgentStatus(agent.id, 'online');
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Set Online
                    </button>
                    <button
                      onClick={() => {
                        updateAgentStatus(agent.id, 'away');
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Set Away
                    </button>
                    <button
                      onClick={() => {
                        updateAgentStatus(agent.id, 'offline');
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Set Offline
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 