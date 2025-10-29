'use client'

import { useState } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import Header from '@/components/Header'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [saved, setSaved] = useState(false)

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'Design Co.',
    timezone: 'UTC-5',
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReport: true,
    trendAlerts: true,
    language: 'en',
    theme: 'light',
  })

  const [apiSettings, setApiSettings] = useState({
    autoScrape: true,
    scrapeFrequency: 'daily',
    maxResults: '100',
    enableCache: true,
    cacheExpiry: '24',
  })

  const handleSave = () => {
    // TODO: Implement save functionality
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'preferences', label: 'Preferences', icon: '⚙️' },
    { id: 'api', label: 'API Settings', icon: '🔧' },
    { id: 'security', label: 'Security', icon: '🔒' },
  ]

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Manage your account settings and preferences
            </p>
          </div>

          {saved && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-800 font-medium">Settings saved successfully!</span>
              </div>
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex -mb-px">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={profile.company}
                      onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Timezone
                    </label>
                    <select
                      value={profile.timezone}
                      onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="UTC-8">Pacific Time (UTC-8)</option>
                      <option value="UTC-7">Mountain Time (UTC-7)</option>
                      <option value="UTC-6">Central Time (UTC-6)</option>
                      <option value="UTC-5">Eastern Time (UTC-5)</option>
                      <option value="UTC">UTC</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleSave}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* Preferences Tab */}
              {activeTab === 'preferences' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Notifications</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">Email Notifications</span>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates via email</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.emailNotifications}
                          onChange={(e) => setPreferences({ ...preferences, emailNotifications: e.target.checked })}
                          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                        />
                      </label>

                      <label className="flex items-center justify-between">
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">Push Notifications</span>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive browser push notifications</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.pushNotifications}
                          onChange={(e) => setPreferences({ ...preferences, pushNotifications: e.target.checked })}
                          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                        />
                      </label>

                      <label className="flex items-center justify-between">
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">Weekly Report</span>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Get a weekly summary of your activity</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.weeklyReport}
                          onChange={(e) => setPreferences({ ...preferences, weeklyReport: e.target.checked })}
                          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                        />
                      </label>

                      <label className="flex items-center justify-between">
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">Trend Alerts</span>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about trending products</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.trendAlerts}
                          onChange={(e) => setPreferences({ ...preferences, trendAlerts: e.target.checked })}
                          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Display</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Language
                        </label>
                        <select
                          value={preferences.language}
                          onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="en">English</option>
                          <option value="es">Español</option>
                          <option value="fr">Français</option>
                          <option value="de">Deutsch</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Theme
                        </label>
                        <select
                          value={preferences.theme}
                          onChange={(e) => setPreferences({ ...preferences, theme: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="light">Light</option>
                          <option value="dark">Dark</option>
                          <option value="auto">Auto</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleSave}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}

              {/* API Settings Tab */}
              {activeTab === 'api' && (
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center justify-between mb-4">
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">Automatic Scraping</span>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Enable automatic product scraping</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={apiSettings.autoScrape}
                        onChange={(e) => setApiSettings({ ...apiSettings, autoScrape: e.target.checked })}
                        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Scrape Frequency
                    </label>
                    <select
                      value={apiSettings.scrapeFrequency}
                      onChange={(e) => setApiSettings({ ...apiSettings, scrapeFrequency: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                      disabled={!apiSettings.autoScrape}
                    >
                      <option value="hourly">Hourly</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Max Results Per Query
                    </label>
                    <input
                      type="number"
                      value={apiSettings.maxResults}
                      onChange={(e) => setApiSettings({ ...apiSettings, maxResults: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">Enable Cache</span>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Cache results for faster access</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={apiSettings.enableCache}
                        onChange={(e) => setApiSettings({ ...apiSettings, enableCache: e.target.checked })}
                        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Cache Expiry (hours)
                    </label>
                    <input
                      type="number"
                      value={apiSettings.cacheExpiry}
                      onChange={(e) => setApiSettings({ ...apiSettings, cacheExpiry: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                      disabled={!apiSettings.enableCache}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleSave}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Save API Settings
                    </button>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Update Password
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Add an extra layer of security to your account
                    </p>
                    <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:bg-gray-900 transition-colors">
                      Enable 2FA
                    </button>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-red-600 mb-4">Danger Zone</h3>
                    <div className="space-y-4">
                      <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Delete Account</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                          Delete My Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
