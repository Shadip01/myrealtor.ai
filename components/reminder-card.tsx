import { Bell } from "lucide-react"

export default function ReminderCard() {
  return (
    <div className="bg-gray-200 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Important Reminders!</h2>

      <div className="mb-6">
        <div className="flex items-start gap-4">
          <Bell className="h-6 w-6 text-gray-700 mt-1" />
          <div>
            <p className="font-semibold text-lg">Get this doneeeee</p>
            <p className="text-gray-700">Due on 05/02/2025</p>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-2">
          <button className="h-4 w-4 bg-black rounded-full" />
          <button className="h-4 w-4 border border-gray-400 rounded-full" />
          <button className="h-4 w-4 border border-gray-400 rounded-full" />
        </div>
      </div>

      <div>
        <p className="font-semibold">Interest rates are up!</p>
        <p className="text-gray-700">News</p>
      </div>
    </div>
  )
}

