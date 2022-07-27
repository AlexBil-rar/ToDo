
import Alert from 'react-bootstrap/Alert';


  const WorkLisn = ({works, updateWork,  }:any) => {
    return (
        <>

              {!works.complete  ? (
                <Alert 
                  variant='dark' 
                  onClick={() => updateWork(works.id)}
                >
                  {works.title}
                </Alert>
              ) : (
              <Alert   
                variant='success' 
                onClick={() => updateWork(works.id)} 
              >
                {works.title}
              </Alert> 
              )}
           </>
    );
};

export default WorkLisn;