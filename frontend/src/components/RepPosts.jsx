import { Flex, Box, Container, Card, Text, Theme, Grid, Avatar} from '@radix-ui/themes';
import placeHolder from '../Photo/placeholder.png'
import verifiedIcon from '../Photo/Verified.png'
import heart from '../Photo/heart.png'
import notHearted from '../Photo/notHearted.png'
import CommentComp from './CommentComp'

const RepPosts = () => {
    return(
  <Flex justify="center">
 <Card style={{width:"700px"}}>
   <Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)'}}>
        <Container size="2" style={{ background: 'white' }}>
            <Flex gap="3">
                <Box span={1} style={{ margin: '10px', width: "100px" }}> {/* Set span to 1 for the first column */}
                   <Avatar
                   size='6'
                   src={placeHolder}
                   fallback="A"
                   ></Avatar>
                   <Text size='5' weight="bold">Username</Text>
                   <img src={verifiedIcon} alt="Verified" style={{ width: '20px', height: '20px' }} />
                </Box>
                <Box span={1} style={{ margin: '10px'}}>
                    <Card asChild>
                    <Box style={{ padding: '20px' }}>
                        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Text as="div" size="7" weight="bold" style={{marginBottom: '15px'}}>
                            Heading
                        </Text>
                       
                        <Text as="div" color="gray" size="4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                        </a>
                    </Box>
                    </Card>
                </Box>
            </Flex>

            <Flex>
                <img src={notHearted} alt="" style={{width:'25px', height:"25px", marginLeft: "12rem"}}/>
                <CommentComp />
            </Flex>

        </Container>
    </Box>
    </Card>
    </Flex>
    )
}

export default RepPosts