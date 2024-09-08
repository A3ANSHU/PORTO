import {Grid, Paper, Stack, Typography } from "@mui/material"

const Skills=()=>{
    
    let skills =[
        {
            name:'Programming Languages',
            value: [
                {name:'c',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg'},
                {name:'cplusplus',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg'},
                {name:'java',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'},
                {name:'python',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'},
                {name:'javascript',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'},
                {name:'typescript',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'},
                {name:'php',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg'},                
            ],
        },
        {
            name:'Frontend Development',
            value:[
                {name:'html5',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'},
                {name:'css3',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'},
                {name:'react',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'},
                {name:'redux',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg'},
                {name:'material-ui',icon:'https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png'},
                {name:'docusaurus',icon:'https://docusaurus.io/img/docusaurus_keytar.svg'},
                {name:'bootstrap',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'},
            ]
        } ,
        {
            name:'Backend Development',
            value:[
                {name:'nodejs',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'},
            ]
        } ,
        {
            name:'Database',
            value:[
                {name:'mysql',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg'},
            ]
        } ,
        {
            name:'Operating System',
            value:[
                {name:'linux',icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg'},            
                {name:'Windows',icon:'https://code.visualstudio.com/assets/images/windows-logo.png'},            
                {name:'ubantu',icon:'https://static-00.iconduck.com/assets.00/ubuntu-plain-icon-256x256-we4d4gd0.png'},            
            ]
        } ,
        {
            name:'Environments',
            value:[
                {name:'vs-code',icon:'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg'},
                {name:'vim',icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/1022px-Vimlogo.svg.png'},
                {name:'Anaconda',icon:'https://docs.anaconda.com/_static/Anaconda_Icon.png'},
                {name:'terminal',icon:'https://winaero.com/blog/wp-content/uploads/2019/12/Linux-terminal-console-icon-big-256.png'},
                {name:'powershell',icon:'https://raw.githubusercontent.com/gist/Xainey/d5bde7d01dcbac51ac951810e94313aa/raw/6c858c46726541b48ddaaebab29c41c07a196394/PowerShell.svg'},
                {name:'jupyter',icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/640px-Jupyter_logo.svg.png'},
            ]
        } ,
        {
            name:'Version Control',
            value:[
                {name:'git',icon:'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'},
            ]
        }  
    ]
    return(
        <div id="SKILLS" style={{minHeight:'100vh',backgroundColor:'white'}}>
            <Stack spacing={2} sx={{pl:5,pr:5,pt:1.5}}>
            <Stack>
                <Typography variant="h4">SKILLS</Typography>
                <Typography variant="h6">my skills</Typography>
            </Stack>
            <Stack  sx={{gap:2}}>
                
                {
                    skills.map((skill)=>{
                        return(
                            <Stack key={skill.name} sx={{gap:2}}>
                                <Typography variant="h6">{skill.name}</Typography>
                                <Grid container sx={{gap:2}}>
                                {skill.value.map( values => {
                                    return(
                                    <Paper 
                                    key={values.name} 
                                    elevation={12} 
                                    sx={{
                                        p:2,textAlign:'center',width:100,
                                        '&:hover':{transform: 'scale(1.05)',},transition: 'all 0.5s'
                                    }}>
                                        <img src={values.icon} alt={values.name} width="50" height="50"></img>
                                        <Typography variant="h6">{values.name}</Typography>
                                    </Paper>
                                    )
                                })}
                                </Grid>
                            </Stack>
                        )
                    })
                }
                
            </Stack>
            </Stack>
        </div>
    )
}

export default Skills