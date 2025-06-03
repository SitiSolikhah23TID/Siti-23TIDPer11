import axios from 'axios'

const API_URL = "https://uuijxcmsbjkropusfhsi.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1aWp4Y21zYmprcm9wdXNmaHNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MzEyODEsImV4cCI6MjA2NDUwNzI4MX0.5rx7S4eJBJ3BTrk1HPSxFW4X1F6HR1w7Xt2Zl7lJcVA"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
        return response.data    
    },
    async updateNote(id, data) {
        const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers });
        return response.data;
    },
}