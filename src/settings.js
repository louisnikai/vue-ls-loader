const _typeOf = (value) => {
  return Object.prototype.toString.call(value).match(/^\[object\s(.*)\]$/)[1].toLowerCase();
}

export function convertOption(option) {
  if (_typeOf(option) === "string")
    return {
      storage: option
    };

  return option;
}

export function validateStorage(storage) {
  let revisedStorage = _typeOf(storage) === "string" ? storage.toLowerCase() : null;
  return ["local", "session", "memory"].includes(revisedStorage);
}

export function createStorageOption(storage, namespace = "pro__") {
  if (!validateStorage(storage))
    return null;

  let name;
  switch (storage.toLowerCase()) {
    case "local":
      name = "ls";
      break;
    case "session":
      name = "ss";
      break;
    case "memory":
      name = "ms";
      break;
  }

  return {
    storage,
    name,
    namespace
  };
}
