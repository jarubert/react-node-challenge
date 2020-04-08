import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";

const MeetingNoteForm = (props) => {
  const { handleSubmit, register } = useForm();
  const { meetingId, onSubmitAction } = props;
  const onSubmit = values => {
    onSubmitAction(values.noteInput);
    console.log(values);
    console.log(meetingId);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea name="noteInput" ref={register} rows="5" cols="33" />
      <button type="submit">Submit</button>
    </form>
  );
}

MeetingNoteForm.propTypes = {
  onSubmitAction: PropTypes.func.isRequired,
  meetingId: PropTypes.string.isRequired
};

export default MeetingNoteForm;
