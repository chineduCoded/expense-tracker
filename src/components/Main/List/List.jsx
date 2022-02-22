import React from 'react'
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from '@mui/material'
import { Delete, MoneyOff } from '@mui/icons-material'
import useStyles from './styles'
import { useTracker } from '../../../context/context'

const List = () => {
  const classes = useStyles()

  const { deleteTransaction } = useTracker()
  console.log(deleteTransaction)

  const transactions = [
    {
      id: 1,
      type: 'Income',
      category: 'Salary',
      amount: 50,
      date: 'Tue Feb 22',
    },
    {
      id: 2,
      type: 'Expense',
      category: 'Pets',
      amount: 50,
      date: 'Tue Feb 23',
    },
    {
      id: 3,
      type: 'Income',
      category: 'Salary',
      amount: 150,
      date: 'Tue Feb 24',
    },
  ]

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === 'Income'
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}

export default List
