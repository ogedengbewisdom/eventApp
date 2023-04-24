import { useNavigate, Form, useNavigation, useActionData, json, redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigation = useNavigation()
  const navigate = useNavigate();
  const data = useActionData()
  console.log(data)

  const isSubmiting = navigation.state === "submitting"
  
  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        {data && data.errors && <ul>{Object.values(data.errors).map(err => <li key={err}>{err}</li>)}</ul>}
        <label htmlFor="title">Title</label>
        <input
         id="title" 
         type="text" 
         name="title" 
         required 
         defaultValue={event ? event.title : ""}
         />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
         id="image" 
         type="url" 
         name="image"
         required 
         defaultValue={event ? event.image : ""} 
         
         />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
         id="date" 
         type="date" 
         name="date" 
         required 
         defaultValue={event ? event.date : ""}
         
         />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
         id="description" 
         name="description" 
         rows="5" 
         required 
         defaultValue={event ? event.description : ""} 
         />
      </p>
      <div className={classes.actions}>
        <button disabled={isSubmiting} type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmiting}>{isSubmiting ? "Submiting..." : "Save"}</button>
      </div>
    </Form>
  );
}

export default EventForm;

export const action = async ({params, request}) => {
  const data = await request.formData()
  const eventData = {
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description")
  }

  let url = `http://localhost:8080/events`

  if (request.method === "PATCH") {
    const id = params.eventId
    url = `http://localhost:8080/events/${id}`
  }

  const response = await fetch(url, {
      method: request.method,
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
  })

  if (response.status === 422) {
      return response
  }

  if (!response.ok) {
      throw json({message: "Could not save event try again later"}, {status: 500})
  }

  return redirect("/events")

}
