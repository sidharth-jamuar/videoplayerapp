export const receiveAction = (actionName:string,actionData?:any[]) => {
    if(actionData !==undefined) {
      console.log(actionData)
        return {
            type:actionName,
            payload:actionData
        }
    }
  else {
    return {
        type:actionName
    }
  }
}