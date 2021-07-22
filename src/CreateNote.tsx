import React, { useState } from "react"
import { notesRef } from "./firebase"

function CreateNote() {
	const [ note, setNote ] = useState("")

	const createNote = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault()
		const item = {
			task: note,
			done: false
		}
		notesRef.push(item)
		setNote("")
	}

	return (
		<form onSubmit={createNote}>
			<input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Create a note" />
		</form>
	)
}

export default CreateNote
