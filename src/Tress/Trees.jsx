
export function Tree1(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf')
    return <primitive object={scene} {...props} />
  }

export function Tree2(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf')
    return <primitive object={scene} {...props} />
  }

export function Tree3(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf')
    return <primitive object={scene} {...props} />
  }