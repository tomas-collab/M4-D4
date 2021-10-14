import {Badge} from 'react-bootstrap'

const MyBadge = (props) =>(
    <Badge variant={props.color}>
  {props.name}
  <span className="sr-only">unread messages</span>
</Badge>

)

export default MyBadge