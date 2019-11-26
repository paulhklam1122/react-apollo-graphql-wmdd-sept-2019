import React from 'react'

import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import UpdateContact from '../forms/UpdateContact'
import RemoveContact from '../buttons/RemoveContact'

const Contact = (props) => {
  const { editMode, id, firstName, lastName, onButtonClick, onInputChange } = props
  const fullName = `${firstName} ${lastName}`
  return (
    <div>
      {
        editMode ?
          <UpdateContact
            id={id}
            firstName={firstName}
            lastName={lastName}
            editMode={editMode}
            onButtonClick={onButtonClick}
            onInputChange={onInputChange}
          />
          :
          <ListItem>
            <ListItemText
              primary={fullName}
            />
            <Button
              onClick={onButtonClick}
              variant='contained'
              style={{ margin: '5px' }}
            >
              Edit
            </Button>
            <RemoveContact
              id={id}
              firstName={firstName}
              lastName={lastName}
            />
          </ListItem>
      }
    </div>
  )
}

export default Contact
