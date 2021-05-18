export default class Utils {

    GetTransitiveCountHelper = (element: any): number => {
        let TransitiveCount = 0;
        console.log(element)
        if(element.dependencies != null && element.dependencies.length > 0){
            TransitiveCount += element.dependencies.length
            return TransitiveCount

        }
        return 0;
    }

    // @ts-ignore 
    GetTotalVulnerabilityCount = (data: any) => {
        let TotalVulnerabilities = 0;
        let VulnerableDeps = 0;
        let c = 0
        if(data?.length !== 0){

            data?.forEach((element: any)=> {
                c += 1
                const publicVulns = element.private_vulnerabilities.length;
                const privateVulns = element.public_vulnerabilities.length;
                const vulnerable = element.vulnerable_dependencies.length;
                // const count = publicVulns + privateVulns
            
                if(publicVulns > 0 || privateVulns > 0 || vulnerable > 0){
                    const countVulnerable = publicVulns + privateVulns + vulnerable
                    const count = publicVulns + privateVulns
                    TotalVulnerabilities += count
                    VulnerableDeps += countVulnerable + this.VulnerableHelper(element.vulnerable_dependencies);
                }
                
                
            });
            
            return {"total": TotalVulnerabilities, "vulnerable": VulnerableDeps}
        }

        return {"total": 0, "vulnerable": 0};
    }

    VulnerableHelper = (data: any): number => {
        let Count = 0
        data?.forEach((element: any) => {
            if(element.vulnerable_dependencies != null && element.vulnerable_dependencies.length > 0){
                Count += element.vulnerable_dependencies.length + this.VulnerableHelper(element);
            }

        });
        return Count;
    }


    GetTransitiveCount = (data: any): number => {
        let TransitiveCount = 0;
        if (data?.length !== 0){
            data?.forEach((deps: any) => {
                const element = deps?.dependencies
                if(element != null && element.length > 0){
                    TransitiveCount += element.length + this.GetTransitiveCount(element)

                    console.log(TransitiveCount);
                    
                }
                
            });
            return TransitiveCount;
            
        }
        return 0;
        
    }
}