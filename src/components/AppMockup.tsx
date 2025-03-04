import React from 'react';

const AppMockup: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Desktop App */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Mac-style window controls */}
        <div className="bg-gray-100 px-4 py-2 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        
        <div className="flex h-[480px]">
          {/* Sidebar */}
          <div className="w-56 bg-gray-50 border-r border-gray-200 p-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-semibold">T</span>
                </div>
                <span className="font-semibold text-gray-900">TaskFlow</span>
              </div>
              
              <div className="space-y-2">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  📥 Inbox
                </div>
                <div className="p-2 text-gray-600">
                  ⭐️ Today
                </div>
                <div className="p-2 text-gray-600">
                  📅 Upcoming
                </div>
                <div className="p-2 text-gray-600">
                  📊 Projects
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-900">Today's Tasks</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  + Add Task
                </button>
              </div>

              {/* Task List */}
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                    <span className="ml-3 text-gray-700">Review project proposal</span>
                    <span className="ml-auto text-blue-500">🏷️ Work</span>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                    <span className="ml-3 text-gray-700">Team meeting at 2 PM</span>
                    <span className="ml-auto text-purple-500">🤝 Meeting</span>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                    <span className="ml-3 text-gray-700">Update documentation</span>
                    <span className="ml-auto text-green-500">📝 Docs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App */}
      <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-[240px]">
        <div className="bg-black rounded-[32px] p-2.5 shadow-2xl">
          {/* iPhone-style notch */}
          <div className="w-24 h-5 bg-black absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-xl" />
          
          <div className="bg-white rounded-[28px] overflow-hidden">
            {/* Status Bar */}
            <div className="bg-white px-3 py-2 flex justify-between items-center">
              <span className="text-xs font-medium">9:41</span>
              <div className="flex items-center space-x-1">
                <span className="text-xs">📶</span>
                <span className="text-xs">🔋</span>
              </div>
            </div>

            {/* App Content */}
            <div className="h-[400px] bg-gray-50 p-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Tasks</h1>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                    <span className="ml-3 text-sm text-gray-700">Review proposal</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                    <span className="ml-3 text-sm text-gray-700">Team meeting</span>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                <div className="flex justify-around">
                  <span className="text-blue-500">🏠</span>
                  <span className="text-gray-400">📅</span>
                  <span className="text-gray-400">📊</span>
                  <span className="text-gray-400">👤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMockup; 